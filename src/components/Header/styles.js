const styles = {
  toolbarContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2E384D',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 999,
  },
  toolbarTitle: {
    marginLeft: 5,
    color: '#ffffff',
    fontSize: 20,
  },
  leftIconContainer: {
    justifyContent: 'center',
    paddingRight: 20,
  },
  paddingLeft16: {
    paddingLeft: 16,
  },
  defaultIconStyle: {
    width: 60,
    height: 40,
  },
  mooOnStyle: {
    width: 200,
    height: 32,
  },
  mooOnViewStyle: {
    marginLeft: 10,
  },
  syncError: {
    marginTop: -5,
    width: 40,
    height: 40,
  },
  syncErrorHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  syncButton: {
    height: 25,
    width: 25,
  },
  syncStyle: {
    backgroundColor: '#ed1c24',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 7,
  },
  linkTextStyle: {
    color: '#ffffff',
    fontSize: 12,
  },
  middleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  transparentBackground: {
    backgroundColor: 'reba(0, 0, 0, 0)',
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
};

export default styles;
