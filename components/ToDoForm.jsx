export default function ToDoForm()
{
    return(
        <SafeArray>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                />
                <Button title="Add" />
            </View>
        </SafeArray>
    )
}