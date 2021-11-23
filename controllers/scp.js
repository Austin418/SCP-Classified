const SCP = require('../models/scpSchema')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllSCP = async (req, res) => {
  const scps = await SCP.find({ createdBy: req.user.userID }).sort('createdAt')
  res.status(StatusCodes.OK).json({ scps, count: scps.length })
}

const getScp = async (req, res) => {
  const { userID } = req.user
  const { id: ScpID } = req.params
  const scp = await SCP.findOne({
    _id: ScpID,
    createdBy: userID,

  })
  if (!scp) {
    throw new NotFoundError(`no anommaly with ID ${ScpID}`)
  }
  res.status(statusCodes.OK).json({ scp })
}

const createSCP = async (req, res) => {
  req.body.createdBy = req.user.userID
  const scp = await SCP.create(req.body)
  res.status(StatusCodes.CREATED).json({ scp })
}

const updateSCP = async (req, res) => {
  const { company, position } = req.body
  const { userID } = req.user
  const { id: ScpID } = req.params

  if (!company || !position) {
    throw new BadRequestError('company and position fields must be filled')
  }
  const scp = await SCP.findByIdAndUpdate(
    { _id: ScpID, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  )

  if (!scp) {
    throw new NotFoundError(`no anommaly with id ${ScpID}`)

  }
  res.status(StatusCodes.OK).json({ scp })
}

const deleteSCP = async (req, res) => {
  const {
    user: { userID },
    params: { id: ScpID }

  } = req
  const scp = await SCP.findByIdAndRemove({
    _id: ScpID,
    createdBy: userID,

  })
  if (!scp) {
    throw new NotFoundError(`no anommaly with id ${ScpID}`)

  }
  res.status(StatusCodes.OK).json({ scp })
}

module.exports = { getAllSCP, getScp, createSCP, updateSCP, deleteSCP }