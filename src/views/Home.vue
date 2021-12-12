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
            <div class="card-text" style="display: flex;flex-direction: column;">
              <img src="../static/img/logo.png" style="height:120px;margin:auto"  alt="">
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
              <div class="card" v-if="!is_auth">
                <div class="card-header">
                  <h4 class="card-title" style="color:#d90000">Зарегистрируйтесь или войдите в учетную запись</h4>
                </div>
              </div>
              <div class="card" v-else>
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
                                                                  class="feather feather-mail"><path
                                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline
                                  points="22,6 12,13 2,6"></polyline></svg></span>
                            </div>
                            <input type="email" v-model="form.from_email" id="first-name-icon" class="form-control"
                                   name="fname-icon"
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
                            <input type="email" v-model="form.to_email" id="email-id-icon" class="form-control"
                                   name="email-id-icon"
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
                            <input type="datetime-local" v-model="form.date" id="contact-info-icon" class="form-control"
                                   name="contact-icon"
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
                            <input type="password" v-model="form.content_type" id="password-icon" class="form-control"
                                   name="contact-icon"
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
                            <input type="password" v-model="form.x_uid" id="password-icon" class="form-control"
                                   name="contact-icon"
                                   placeholder="Уникальный ID">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="exampleFormControlTextarea2">Subject</label>
                          <textarea class="form-control" v-model="form.subject" id="exampleFormControlTextarea2" rows="3"
                                    placeholder="Содержимое письма"></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Body</label>
                          <textarea class="form-control" v-model="form.body" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Содержимое письма"></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="reset" @click="createMessage(form)"
                                class="btn btn-primary mr-1 waves-effect waves-float waves-light">
                          Проверить
                        </button>
                        <button type="reset" @click="clear" class="btn btn-outline-secondary waves-effect">Очистить
                        </button>
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
                  <th>Статус</th>
                  <th>Точность</th>
                  <th>X-UID</th>
                  <th>Отправитель</th>
                </tr>
                </thead>
                <tbody v-if="getEmails">
                <tr v-for="(email,i) in getEmails" :key="i">
                  <td><span
                      v-bind:class="{'badge-light-success':email.status!=='malevolent','badge-danger':email.status==='malevolent'}"
                      class="badge badge-pill  mr-1">{{ email.status === 'malevolent' ? 'Вредоносный' : 'Безопасный' }}</span>
                  </td>
                  <td>
                    {{ email.status === 'malevolent' ? email.accuracy*100 : (1-email.accuracy)*100 }}%
                  </td>
                  <td>
                    <span class="font-weight-bold">{{ email.x_uid }}</span>
                  </td>
                  <td>{{ email.from_email }}</td>
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
  name: "Home",
  props: [
    'is_auth'
  ],
  data() {
    return {
      form: {
        from_email: "",
        to_email: "",
        date: "",
        content_type: "",
        x_uid: "",
        body: ""
      }
    }
  },
  methods: {
    ...mapActions(['createMessage','clearMessages','setEmailMessages']),
    clear: function () {
      this.form = {
        from_email: "",
        to_email: "",
        date: "",
        content_type: "",
        x_uid: "",
        body: "",
        subject: ""
      }
    }
  },
  computed: {
    ...mapGetters(['getEmails']),
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    is_auth(newVal, oldVal) {
      if (!newVal) {
        this.clearMessages()
      } else {
        this.setEmailMessages('?ordering=-created_at')
      }
    }
  }
}

import {mapActions, mapGetters} from "vuex";
</script>

<style scoped>

</style>