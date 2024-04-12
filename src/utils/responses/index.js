class Responses {
  constructor() {}

  unify(res, code, status, data = null, msg = null, extraProps = null) {
    const obj = { code, status };
    if (data) obj.data = data;
    if (msg) obj.msg = msg;

    if (extraProps && typeof extraProps == "object")
      for (const key in extraProps) {
        if (extraProps.hasOwnProperty(key)) {
          obj[key] = extraProps[key];
        }
      }

    res.status(code).send(obj);
  }

  created(res, data = null, msg = null, extraProps = null) {
    this.unify(res, 201, "created", data, msg, extraProps);
  }

  fetched(res, data, msg = null, extraProps = null) {
    this.unify(res, 200, "fetched", data, msg, extraProps);
  }

  updated(res, data, msg = null, extraProps = null) {
    this.unify(res, 200, "updated", data, msg, extraProps);
  }

  deleted(res, data = null, msg = null, extraProps = null) {
    this.unify(res, 204, "deleted", data, msg, extraProps);
  }

  noContent(res, msg = null, extraProps = null) {
    this.unify(res, 202, "success", null, msg, extraProps);
  }

  success(res, data = null, msg = null, extraProps = null, token = null) {
    this.unify(res, 200, "success", msg, data, extraProps);
  }

  forbidden(res, msg = null, extraProps = null) {
    this.unify(res, 403, "forbidden", null, msg, extraProps);
  }

  unauthorized(res, msg = null, extraProps = null) {
    this.unify(res, 401, "unauthorized", null, msg, extraProps);
  }

  notFound(res, msg = null) {
    this.unify(res, 404, "not found", null, msg);
  }

  clientError(res, msg = null) {
    this.unify(res, 400, "client error", null, msg);
  }

  serverError(res, msg = null) {
    this.unify(res, 500, "server error", null, msg);
  }
}
export default Responses;
