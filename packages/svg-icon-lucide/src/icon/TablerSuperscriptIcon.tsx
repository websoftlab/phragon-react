import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSuperscriptIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSuperscriptIcon = React.forwardRef<SVGSVGElement, TablerSuperscriptIconProps>(
	function TablerSuperscriptIcon(props, ref) {
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
				<path d="m4 19 8-8" />
				<path d="m12 19-8-8" />
				<path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSuperscriptIcon.displayName = "TablerSuperscriptIcon";
}
