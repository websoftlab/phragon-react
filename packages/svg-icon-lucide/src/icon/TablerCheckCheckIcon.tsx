import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCheckCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCheckCheckIcon = React.forwardRef<SVGSVGElement, TablerCheckCheckIconProps>(
	function TablerCheckCheckIcon(props, ref) {
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
				<path d="M18 6 7 17l-5-5" />
				<path d="m22 10-7.5 7.5L13 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCheckCheckIcon.displayName = "TablerCheckCheckIcon";
}
