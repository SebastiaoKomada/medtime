const CalendarHeader = () => {
    const months: string[] = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      
      const weeksDays: string[] = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'
      ];
    const today = new Date();
    return (
        <div className="flex justify-between font-bold text-lg">
            <span>{months[today.getMonth()]}, {today.getFullYear()}</span>
            <span>{weeksDays[today.getDay()]}</span>
        </div>
    );
};

export default CalendarHeader;