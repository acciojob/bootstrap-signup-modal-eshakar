//your JS code here. If required.
 document.getElementById('open-modal').addEventListener('click', () => {
            document.getElementById('modal').classList.remove('hidden');
        });

        document.getElementById('close-modal').addEventListener('click', () => {
            document.getElementById('modal').classList.add('hidden');
        });