import DB from '../lib/db/db';

export const callback = (body: any) => {
  return new Promise(async (resolve, reject) => {
    const db = DB.instance;
    try {
      if (body.type === 'event_callback') {
        const event: any = body.event;
        switch (event.type) {
          case 'message':
            console.log(event);
          break;
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      await db.close();
    }
  });
};
