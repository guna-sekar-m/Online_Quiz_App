"use client"
import {create} from 'zustand';
const tokenname=process.env.SECRET_TOKEN;
const useAuthStore = create((set) => ({
  isAuthenticated: typeof window !== 'undefined' ?JSON.parse(localStorage.getItem(tokenname))?true:false:null,
  login: (user) => {
    localStorage.setItem(tokenname, JSON.stringify(user));
    set({ isAuthenticated: true, user });
  },
  logout: () => {
    localStorage.removeItem(tokenname);
    set({ isAuthenticated: false, user: null });
  },
  decodeToken: () => {
    const token =  typeof window !== 'undefined' ?localStorage.getItem(tokenname):null;
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  },
}));

export default useAuthStore;