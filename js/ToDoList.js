import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Body, Content, Item, Icon, Title, Form, Text, Button, Input } from 'native-base';
import Note from './Note';

function ToDoList() {
    const [input, setInput] = useState('');
    const [toDoItems, setToDoItems] = useState(
        [
            {id: 'hi', text: 'Hi'},
            {id: 'hello', text: 'Hello'}
        ]
    );
    const [doneItems, setDoneItems] = useState([]);

    // Declares Handlers
    const _onPressAddNote = e => {
        if (input !== undefined && input.length > 0) {
            toDoItems.push(input);
            setToDoItems((toDoItems) => {
                return Array.from(toDoItems);
            });
        }
    }
    const moveNoteToDoneHandler = e => {
        const note = e.target.value;
        toDoItems.remove(note);
        doneItems.push(note);
        setDoneItems((doneItems) => {
            return Array.from(doneItems);
        });
    }
    // ===================== //

    return (
        <Container>
            <Header>
                <Body>
                    <Title>To Do List</Title>
                </Body>
            </Header>
            <Container containerStyle={styles.container}>
                <Content>
                    <Form style={styles.formGroup}>
                        <Item
                            style={{ width: '80%', height: 50 }}
                            rounded
                        >
                            <Input
                                style={{ width: 100, height: 30 }}
                                placeholder="Type your note..."
                                onChangeText={(text) => setInput(text)}
                                value={input}
                            />
                            <Icon name="ios-add-circle" onPress={(e) => _onPressAddNote(e)}></Icon>
                        </Item>
                    </Form>
                    <FlatList
                        style={{ maxHeight: 300, maxWidth: '80%' }}
                        data={toDoItems}
                        renderItem={({ item }) => <Note note={item}/>}
                        keyExtractor={(item) => item.id}
                    />
                </Content>
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#ff150450'
    },
    formGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30
    }

})

export default ToDoList
