import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadContact } from './../../store/contacts/thunks';
import { LoadingState } from './../../ui/components/LoadingState';
import { BitLayout } from './../layout/BitLayout';
import { InputRead } from './../components/layout/InputRead';

export const ContactPage = () => {
  const [contact, setContact] = useState();
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatchLoadData();
  }, [])

  const dispatchLoadData = async () => {
    const { contact, message } = await dispatch(loadContact(id));
    setContact(contact);
    setMessage(message);
  }

  if (!contact && !message) {
    return <LoadingState />;
  }

  return (
    <BitLayout title='Contactos' subtitle='Ver contacto' returnRoute='/contacts'>
      {
        (!contact && message) ? <Message message={message} /> :
          <div className="row">
            <div className="col-12">
              <div className="row g-3">
                <InputRead col={12} title="Nombre" value={contact.name} />
                <InputRead col={12} title="Email" value={contact.email} />
              </div>
            </div>
          </div>
      }
    </BitLayout>
  )
}
