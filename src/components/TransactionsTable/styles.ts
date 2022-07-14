import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(text-body);
      border-radius: o.25rem;

      &:first-child {
        color: var(text-title);
      }
    }

    &.deposit {
      background-color: var(--green);
    }

    &.withdraw {
      background-color: var(--red);
    }
  }
`;