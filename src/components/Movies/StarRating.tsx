import StarFull from "../../assets/satfull.svg";
import StarEmpty from "../../assets/starempty.svg";
import StarHalf from "../../assets/starhalf.svg";

export interface Props {
  rating: number;
}

export default function StarRating({ rating }: Props) {
  // Calcula o número de estrelas cheias (inteiras). Como cada estrela cheia vale 2, dividimos o rating por 2
  const fullStars = Math.floor(rating / 2); // Exemplo: se o rating for 7, fullStars será 3

  // Verifica se existe uma estrela meia. Se o resto da divisão por 2 for maior ou igual a 1, temos uma meia estrela
  const hasHalfStar = rating % 2 >= 1; // Exemplo: se o rating for 7, hasHalfStar será true (7 % 2 é 1)

  // Calcula o número de estrelas vazias. Subtraímos o número de estrelas cheias e, se houver uma meia estrela, também subtraímos 1
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Exemplo: se fullStars for 3 e hasHalfStar for true, emptyStars será 1

  return (
    <div className="flex gap-1">
      {Array(fullStars) // Cria um array com o tamanho do número de estrelas cheias
        .fill(0) // Preenche o array com valores para mapear
        .map((_, index) => (
          <img
            key={`full-${index}`}
            src={StarFull}
            alt="Avaliação cheia"
            className="h-6 w-6 object-cover"
          />
        ))}

      {hasHalfStar && ( // Renderiza apenas se hasHalfStar for true
        <img
          src={StarHalf}
          alt="Avaliação meia"
          className="h-6 w-6 object-cover"
        />
      )}

      {Array(emptyStars) // Cria um array com o tamanho do número de estrelas vazias
        .fill(0) // Preenche o array com valores para mapear
        .map((_, index) => (
          <img
            key={`empty-${index}`}
            src={StarEmpty}
            alt="Avaliação vazia"
            className="h-6 w-6 object-cover"
          />
        ))}
    </div>
  );
}
