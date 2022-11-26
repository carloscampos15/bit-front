import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BitLayout } from './../layout/BitLayout';
import { useDispatch } from 'react-redux';
import { loadSector } from '../../store/sectors/thunks';
import { Message } from './../components/sectors/Message';
import { LoadingState } from './../../ui/components/LoadingState';
import { InputRead } from '../components/layout/InputRead';

export const SectorPage = () => {
    const [sector, setSector] = useState();
    const [message, setMessage] = useState();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatchLoadData();
    }, [])

    const dispatchLoadData = async () => {
        const { sector, message } = await dispatch(loadSector(id));
        setSector(sector);
        setMessage(message);
    }

    if (!sector && !message) {
        return <LoadingState />;
    }

    return (
        <BitLayout title='Sectores' subtitle='Ver sector' returnRoute='/sectors'>
            {
                (!sector && message) ? <Message message={message} /> :
                    <div className="row">
                        <div className="col-12">
                            <div className="row g-3">
                                <InputRead col={12} title="Nombre" value={sector.name} />
                            </div>
                        </div>
                    </div>
            }
        </BitLayout>
    )
}
