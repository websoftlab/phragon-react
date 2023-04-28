import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChairDirectorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChairDirectorIcon = React.forwardRef<SVGSVGElement, TablerChairDirectorIconProps>(
	function TablerChairDirectorIcon(props, ref) {
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
				<path d="M6 21l12 -9" />
				<path d="M6 12l12 9" />
				<path d="M5 12h14" />
				<path d="M6 3v9" />
				<path d="M18 3v9" />
				<path d="M6 8h12" />
				<path d="M6 5h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChairDirectorIcon.displayName = "TablerChairDirectorIcon";
}
