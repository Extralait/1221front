<template>
  <div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Главная</h2>
              <div class="breadcrumb-wrapper">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a @click="$router.push('/')">Главная</a>
                  </li>
                  <li class="breadcrumb-item active">Dashboard
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <!-- Kick start -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Анализ письма на вредоносность🚀</h4>
          </div>
          <div class="card-body">
            <div class="card-text">
              <p>
                Для проверки письма на вредоносность нужно заполнить все поля соответствующими данными и нажать на
                кнопку "Проверить".<br>
                Результатом предсказания будет бинарное значение 1\0 и процентная вероятность предсказания (0-100%). Что
                соответствует: 1-вредоносное, 0-безопасное.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Форма заполнения письма</h4>
                </div>
                <div class="card-body">
                  <form class="form form-vertical">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label for="first-name-icon">From</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                  height="14" viewBox="0 0 24 24" fill="none"
                                                                  stroke="currentColor" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  class="feather at-sign"><path
                                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7"
                                                                                               r="4"></circle></svg></span>
                            </div>
                            <input type="text" id="first-name-icon" class="form-control" name="fname-icon"
                                   placeholder="Отправитель">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="email-id-icon">To Email</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                  height="14" viewBox="0 0 24 24" fill="none"
                                                                  stroke="currentColor" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  class="feather feather-mail"><path
                                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline
                                  points="22,6 12,13 2,6"></polyline></svg></span>
                            </div>
                            <input type="email" id="email-id-icon" class="form-control" name="email-id-icon"
                                   placeholder="Email получателя">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="contact-info-icon">Date</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                  height="14" viewBox="0 0 24 24" fill="none"
                                                                  stroke="currentColor" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  class="feather file-text"><rect x="5" y="2" width="14"
                                                                                                  height="20" rx="2"
                                                                                                  ry="2"></rect><line
                                  x1="12" y1="18" x2="12.01" y2="18"></line></svg></span>
                            </div>
                            <input type="number" id="contact-info-icon" class="form-control" name="contact-icon"
                                   placeholder="Дата и время отправки">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="password-icon">Content-type</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                  height="14" viewBox="0 0 24 24" fill="none"
                                                                  stroke="currentColor" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  class="feather feather-lock"><rect x="3" y="11"
                                                                                                     width="18"
                                                                                                     height="11" rx="2"
                                                                                                     ry="2"></rect><path
                                  d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
                            </div>
                            <input type="password" id="password-icon" class="form-control" name="contact-icon"
                                   placeholder="Тип письма">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="password-icon">X-UID</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                  height="14" viewBox="0 0 24 24" fill="none"
                                                                  stroke="currentColor" stroke-width="2"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  class="feather feather-lock"><rect x="3" y="11"
                                                                                                     width="18"
                                                                                                     height="11" rx="2"
                                                                                                     ry="2"></rect><path
                                  d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
                            </div>
                            <input type="password" id="password-icon" class="form-control" name="contact-icon"
                                   placeholder="Уникальный ID">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Body</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Содержимое письма"></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="reset" class="btn btn-primary mr-1 waves-effect waves-float waves-light">
                          Проверить
                        </button>
                        <button type="reset" class="btn btn-outline-secondary waves-effect">Очистить</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--/ Kick start -->

        <!-- Page layout -->
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Размеченные моделью письма из датасета</h4>
          </div>
          <div class="card-body">
            <div class="card-text">
              <p>
                При изменении параметров модели нужно перезапустить предсказание для всего датасета!
              </p>
            </div>

            <div class="table-responsive">
              <table class="table">
                <thead class="thead-dark">
                <tr>
                  <th>X-UID</th>
                  <th>Отправитель</th>
                  <th>Статус</th>
                  <th>Точность</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <span class="font-weight-bold">34fb01171d58d77e83103cf8275df001a0777fe0</span>
                  </td>
                  <td>mike.mcconnell@enron.com</td>
                  <td><span class="badge badge-pill badge-light-success mr-1">Безопасное</span></td>
                  <td>
                    100%
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="font-weight-bold">628625bc91e9e70fece4ec8b6301179e54f48060</span>
                  </td>
                  <td>joannie.williamson@enron.com</td>
                  <td><span class="badge badge-pill badge-light-success mr-1">Безопасное</span></td>
                  <td>
                    100%
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="font-weight-bold">628625bc91e9e70fece4ec8b6301179e54f48060</span>
                  </td>
                  <td>chris.germany@enron.com</td>
                  <td><span class="badge badge-pill badge-danger mr-1">Вредоносное</span></td>
                  <td>
                    98%
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="font-weight-bold">1b8b477ec7bbc34d2a49facaec531068bb18e904</span>
                  </td>
                  <td>sherri.sera@enron.com</td>
                  <td><span class="badge badge-pill badge-danger mr-1">Вредоносное</span></td>
                  <td>
                    99%
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>