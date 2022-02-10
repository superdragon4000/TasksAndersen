import React, { useContext, useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login';
import Main from '../pages/Main';
import Registration from '../pages/Registration';
import Error from '../pages/Error';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import { useFetching } from '../hooks/useFetching';
import Loader from './UI/Loader/Loader';
import Activation from '../pages/Activation';



const AppRouter = () => {
  const {store} = useContext(Context);

  const [fetchMain, isMainLoading] = useFetching(async () => {
    if (localStorage.getItem('token')) {
      await store.checkAuth();
      await store.getTasks();
    }
  });

  useEffect(() => {
    fetchMain();
  }, [])


  return (
      <Routes>
        <Route path="/login" element={
          !isMainLoading ? (store.isAuth ? <Navigate to="/tasks"/>: <Login/>) : <Loader/>
        } />
        <Route path="/registration" element={
          !isMainLoading ? (store.isAuth ? <Navigate to="/tasks"/>: <Registration/>) : <Loader/>
        } />
        <Route path="/tasks"element={
          !isMainLoading ? (store.isAuth ? <Main/> : <Navigate to="/login"/>) : <Loader/>
        }/>
        <Route path="/activation/:activationLink" element={<Activation />}/>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />}/>
      </Routes>
  );
};

export default observer(AppRouter);
