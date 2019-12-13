import React from 'react'
import { Container, Left, Right, Icon, Text, Badge } from 'native-base'
import { StyleSheet } from 'react-native'

function Note(props) {
    const { note } = props;
    
    return (
        <Container style={styles.container}>
            <Text>
                {note.text}
            </Text>
            <Badge success style={{marginLeft: 'auto'}}>
                <Icon name="remove-circle"></Icon>
            </Badge>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000050',
        height: 60,
        borderRadius: 50
    }
})

export default Note
