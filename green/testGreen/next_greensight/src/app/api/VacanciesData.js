'use server'
export async function vacanciesData(filters){
    const url = new URL('https://api.hh.ru/vacancies');
    url.searchParams.set('per_page', 21); //21 для наглядного отображения реализации отображения и скрытия кнопки для показа новых вакансий
    
    if(filters.Form === 'Part time') {
        url.searchParams.set('employment', 'part');
    } else {
        url.searchParams.set('employment', 'full');
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Ошибка:', error);
        return ([])
    }
};
