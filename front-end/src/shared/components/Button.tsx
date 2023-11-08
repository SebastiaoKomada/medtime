import React, { ButtonHTMLAttributes } from "react";

interface PropsDoBotaoPersonalizado extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

const BotaoPersonalizado: React.FC<PropsDoBotaoPersonalizado> = ({ loading, children, ...rest }) => {
  return (
    <button {...rest} disabled={loading}>
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default BotaoPersonalizado;