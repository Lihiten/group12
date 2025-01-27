from flask import Blueprint

page_error_handlers = Blueprint(
    'page_error_handlers',  # Unique name for the blueprint
    __name__,
)

@page_error_handlers.app_errorhandler(404)
def not_found_error(error):
    return "Page not found!", 404

# Example error handler for 500
@page_error_handlers.app_errorhandler(500)
def internal_server_error(error):
    return "Internal server error!", 500
