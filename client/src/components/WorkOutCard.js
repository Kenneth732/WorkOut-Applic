import styled from "styled-components";

function WorkOutCard({ workout }) {
  return (
    <Wrapper className="flex">
            <Poster>
        <img src={workout.user_url} alt={workout.title + " Poster"} />
      </Poster>
      {workout.discount && <Discount>Discount!</Discount>}
      <Detail>
        <h2>{workout.title}</h2>
        <p>
          {workout.category} | {workout.year} | {workout.length} min.
        </p>
        <p>Directed by {workout.parti}</p>
        <p>{workout.description}</p>
      </Detail>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px , 1fr));
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  gap: 36px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Poster = styled.div`
  flex: 0 0 200px;

  img {
    width: 100%;
  }
`;

const Discount = styled.div`
  position: absolute;
  background-color: blue;
  color: yellow;
  font-weight: bold;
  top: 0;
  left: 0;
  padding: 8px 32px;
  text-align: center;
  transform: translateY(-100%) rotate(-90deg) translateX(-70.71067811865476%)
    rotate(45deg);
  transform-origin: bottom left;
`;

const Detail = styled.div`
  flex: 1 1 250px;

  h2 {
    margin-top: 0;
    margin-bottom: 12px;
  }

  p {
    margin: 8px 0;
    line-height: 1.4;
  }
`;

export default WorkOutCard;
