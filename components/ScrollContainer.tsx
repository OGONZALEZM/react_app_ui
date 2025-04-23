import { ReactNode } from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView } from 'react-native';

type ScrollContainerProps = {
    children: ReactNode;
};

export default function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {children}
            </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        padding: 20,
    },
});