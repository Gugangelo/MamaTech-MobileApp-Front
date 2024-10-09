import React from "react";
import { ActivityIndicator, View } from "react-native";

import SignRoutes from './SignRoutes'
import AppRoutes from './AppRoutes'
import userAuth from "../hooks/userAuth";

export default function Routes() {
  const { authenticated, loading } = userAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    )
  }
  return (authenticated) ? <AppRoutes /> : <SignRoutes />
};