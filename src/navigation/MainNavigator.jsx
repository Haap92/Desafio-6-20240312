import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
import { setProfileImage, setUserLocation } from "../features/auth/authSlice";

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  const {data, isLoading, error} = useGetProfileImageQuery(localId);
  const {data: location} = useGetUserLocationQuery(localId);
  console.log('MainNavigator', user);

  const dispatch = useDispatch();

  useEffect(()=> {
    if(data) {
      dispatch(setProfileImage(data.image))
    }
    if(location) {
      dispatch(setUserLocation(location))
    }
  }, [data, location])

  return (
    <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});

