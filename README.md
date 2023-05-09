# ngss-task

#### Canlı link : https://ngss-task.vercel.app/
 
### Projeyi hazırlarken https://dummyjson.com/docs API'sinden faydalandım. Bu API ile birlikte users ve posts verilerinden yararlandım, fake auth işlemini gerçekleştirdim. Giriş yapabilmek için API'de bulunan kullanıcı username ve password bilgilerini kullanmak gerekmektedir. Aşağıda birkaç tanesini iletiyorum.

#### username : kminchelle
#### password : 0lelplR

#### username : atuny0
#### password : 9uQFF1Lh

### Projeyi hazırlarken, React, Typescript, Redux Toolkit, React Router Dom, React-Chartsjs-2, Axios ve CSS kullandım.

### Proje Home, Profile, Users, Dashboard, Login ve Not Found olmak üzere 6 sayfadan oluşmaktadır.

#### Anasayfada kullanıcalara ait postlar ve bu postlara gelen reactionlara yer veirilmiştir. Performansı yükseltmek için ilk olarak 10 post gelmekte, sayfanın altında Load More Post butonu ile sıradaki 10 post gelmekte ve böyle devam etmektedir.
#### Profile sayfasında login olan kullanıcıya ait genel bilgiler bulunmaktadır.
#### Users sayfasında filtreleme işlemi yaparak filtreye uygun kullanıcılar gözükmekte, user card'larındaki See User's Post butonu ile kullanıcının(varsa) post bilgileri görünmektedir.
#### Dashboard sayfasında cinsiyet, yaş, göz rengi ve departman başlıklı 4 adet chart bulunmaktadır.
#### Login sayfasında bir form bulunmakta ve eğer API'ye kayıtlı bir kullanıcının username ve password'ü ile giriş yapılırsa anasayfaya yönlendirmektedir.
#### Not found sayfası ise üstteki 4 sayfanın haricinde bir sayfa girişi yapıldığında çalışmakta, sayfa açıldıktan 3 saniye sonra eğer kullanıcı loginli ise anasayfaya, değil ise login sayfasına yönlendirmektedir.
#### Login olan kullanıcı bilgilerini, kullanıcı tekrar tekrar login olmasına gerek kalmaması adına local storage'a kayıt ettim.
