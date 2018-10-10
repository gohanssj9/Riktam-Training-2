class DepartmentsController < ApplicationController
  
  def index
  	@departments = Department.all
    render json: @departments
  end

  def show
  	@department = Department.find(params[:id])
    # respond_to do |format|
    #   format.json {render json: @deparment}
    # end
    render json: @department
  end

  def new
  	@department = Department.new
    # respond_to do |format|
    #   format.html
    #   format.json {render json: @department}
    # end
  end

  def create
  	@departments = Department.all
  	@department = Department.create(department_params)
    # respond_to do |format|
    #   format.html
    #   format.json {render json: @department}
    #   format.js
    #   #format.json {render json: @department, location: @department, status: :created }
    # end
    render template: 'departments/save'
    # redirect_to '/departments'
  end

  def edit
  	@department = Department.find(params[:id])
  end

  def update
  	@departments = Department.all
  	@department = Department.find(params[:id])
  	@department.update_attributes(department_params)
  end

  def delete
  	@department = Department.find(params[:department_id])
  end

  def destroy
  	@departments = Department.all
  	@department = Department.find(params[:id])
  	@department.destroy
  end

  private
  	def department_params
  	  params.require(:department).permit(:title, :body)
  	end
end
