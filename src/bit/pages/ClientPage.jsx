import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadingState } from './../../ui/components/LoadingState';
import { BitLayout } from './../layout/BitLayout';
import { InputRead } from './../components/layout/InputRead';
import { loadClient } from './../../store/clients/thunks';

export const ClientPage = () => {
  const [client, setClient] = useState();
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatchLoadData();
  }, [])

  const dispatchLoadData = async () => {
    const { client, message } = await dispatch(loadClient(id));
    setClient(client);
    setMessage(message);
  }

  if (!client && !message) {
    return <LoadingState />;
  }

  return (
    <BitLayout title='Clientes' subtitle='Ver cliente' returnRoute='/clients'>
      {
        (!client && message) ? <Message message={message} /> :
          <div className="row">
            <div className="col-12">
              <div className="row g-3">
                <InputRead col={12} title="Nombre" value={client.name} />
                <InputRead col={12} title="Email" value={client.email} />
                <InputRead col={12} title="Nit" value={client.nit} />
                <InputRead col={12} title="Dirección" value={client.address} />
                <InputRead col={12} title="Ciudad" value={client.city} />
              </div>
            </div>
          </div>
      }
    </BitLayout>
  )
}
