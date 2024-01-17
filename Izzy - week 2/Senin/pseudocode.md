Start
    Initialize constants and variables
    Display HTML content
    Set default styles and animations

    Function abovezero()
        Read percepatanInput value
        Read massaInput value

        If percepatanValue < 0 Then
            Set percepatanInput value to 0
        End If

        If massaValue < 0 Then
            Set massaInput value to 0
        End If
    End Function

    Function answer()
        Read tipemasa value
        Read m value
        Read a value

        If a is empty or not a valid number Then
            Display error message for invalid percepatan
        ElseIf m is empty or not a valid number Then
            Display error message for invalid massa
        Else
            Convert massa based on tipemasa
            Calculate force (f = m * a)
            Display the result
        End If
    End Function

End