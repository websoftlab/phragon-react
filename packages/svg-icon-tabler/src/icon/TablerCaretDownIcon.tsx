import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaretDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaretDownIcon = React.forwardRef<SVGSVGElement, TablerCaretDownIconProps>(
	function TablerCaretDownIcon(props, ref) {
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
				<path d="M6 10l6 6l6 -6h-12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaretDownIcon.displayName = "TablerCaretDownIcon";
}
