import { useEffect, useState } from "react";
import "../../../index.css";
import CalendarHeader from "./CalendarHeader";
import DatesMatrix from "./DatesMatrix";
import Weeks from "./Weeks";
import { format } from "date-fns";
import { useRequest } from "../../hooks/useRequest";
import { URL_GET_MEDICATION, URL_POST_CONFIRMATION } from "../../constants/urls";
import { MethodsEnum } from "../../enums/methods.enum";
import { MedicationType } from "../../../modules/Home/types/MedicationType";

const generateDates = () => {
    const calendar: { day: number | null; isCurrent: boolean }[][] = [[]];
    const today: Date = new Date();
    const startDate: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const endDate: Date = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    let week: number = 0;

    for (let i: number = 0; i < startDate.getDay(); i++) {
        calendar[week].push({ day: null, isCurrent: false });
    }

    for (let i: number = 1; i <= endDate.getDate(); i++) {
        const isCurrentDay = today.getDate() === i && today.getMonth() === endDate.getMonth() && today.getFullYear() === endDate.getFullYear();

        if (calendar[week].length === 7) {
            week++;
            calendar[week] = [];
        }

        calendar[week].push({ day: i, isCurrent: isCurrentDay });
    }

    while (calendar[week].length < 7) {
        calendar[week].push({ day: null, isCurrent: false });
    }

    return calendar;
};

const Calendar = () => {
    const dates = generateDates();
    const { request } = useRequest();
    const [dateNow, setDateNow] = useState<string | null>(null);
    const [confirmation, setConfirmation] = useState<any[]>([]);
    const [medications, setMedications] = useState<any[]>([]);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const handleDateClick = async (day: number | null) => {
        const selectedDate = new Date();
        if (day) {
            selectedDate.setDate(day);
            setSelectedDate(day);
            const formattedDate = format(selectedDate, "yyyy-MM-dd");
            setDateNow(formattedDate);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const perId = localStorage.getItem('perId');
                const result: any[] | undefined = await request(`${URL_POST_CONFIRMATION}/${perId}`, MethodsEnum.POST, undefined, {
                    conData: dateNow
                });

                if (result) {
                    setConfirmation(result as any[]);
                    const ids = result.map((item) => item.conMedId);
                    if (ids.length > 0) {
                        const responses = await Promise.all(
                            ids.map(async (id: number) => {
                                const medicationResult: MedicationType | undefined = await request(`${URL_GET_MEDICATION}/${id}`, MethodsEnum.GET, undefined);
                                return { id, nome: medicationResult?.medNome };
                            })
                        );

                        const filteredMedications = responses.filter((medication) => medication.nome !== undefined);
                        setMedications(filteredMedications.map((medication) => medication.nome));
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dateNow]);

    return (
        <>
        <div className="mx-auto">
            <CalendarHeader />
            <Weeks />
            <DatesMatrix
                dates={dates}
                onSelect={handleDateClick}
                onDateClick={handleDateClick}
                selectedDate={selectedDate}
            />
            </div>
            {confirmation.length > 0 && (
                <div>
                    <h1 className="title__home">Historico:</h1>
                    <ul>
                        {confirmation.map((item: any, index: number) => {
                            const data = new Date(item.created_at);
                            const horas = data.getHours().toString().padStart(2, '0');
                            const minutos = data.getMinutes().toString().padStart(2, '0');
                            const segundos = data.getSeconds().toString().padStart(2, '0');
                            const horarioFormatado = `${horas}:${minutos}:${segundos}`;

                            return (
                                <a href="#" className="card-history-details__home">
                                    <li key={item.conId}>
                                        <p>Nome do Medicamento: {medications[index]}</p>
                                        <p>Horário: {horarioFormatado}</p>
                                    </li>
                                </a>
                            );
                        })}
                    </ul>
                </div>
            )}
        
        </>
    );
};

export default Calendar;