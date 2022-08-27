import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header, Card } from 'components';
import { CardContainer, Container, Table } from './styles';
import { DEFAULT_VALUES } from './constants';

const Room: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation(['room', 'common']);

  const handleClick = () => {};

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>6</Card>
          <Card>teste</Card>
          <Card>teste</Card>
          <Card>teste</Card>
          <Card>teste</Card>
        </CardContainer>
        <Table />
        <CardContainer>
          <Card>teste</Card>
          <Card>teste</Card>
          <Card>teste</Card>
          <Card>teste</Card>
          <Card>teste</Card>
        </CardContainer>
        <h2>{t('select_value')}</h2>
        <CardContainer className="wrapper">
          {DEFAULT_VALUES.map((value: number) => (
            <Card>{value}</Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default Room;
