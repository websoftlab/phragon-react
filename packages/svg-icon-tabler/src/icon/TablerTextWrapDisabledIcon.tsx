import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextWrapDisabledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextWrapDisabledIcon = React.forwardRef<SVGSVGElement, TablerTextWrapDisabledIconProps>(
	function TablerTextWrapDisabledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M4 6l10 0" />
				<path d="M4 18l10 0" />
				<path d="M4 12h17l-3 -3m0 6l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextWrapDisabledIcon.displayName = "TablerTextWrapDisabledIcon";
}
