require "test_helper"

class BdaysControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get bdays_new_url
    assert_response :success
  end

  test "should get create" do
    get bdays_create_url
    assert_response :success
  end
end
