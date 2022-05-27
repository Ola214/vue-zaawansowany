export default {
    props: ['value'],
    render(h) {
        const self = this;
        return h('div', [
            h('p', 'Podaj nazwe przedmiotu: '),
            h('input', {
                domProps: {
                    value: self.value
                },
                on: {
                    input(event) {
                        self.$emit('input', event.target.value);
                    }
                }
            })
        ])

    }
}