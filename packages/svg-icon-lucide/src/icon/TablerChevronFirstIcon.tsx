import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronFirstIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronFirstIcon = React.forwardRef<SVGSVGElement, TablerChevronFirstIconProps>(
	function TablerChevronFirstIcon(props, ref) {
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
				<path d="M17 18 L11 12 L17 6" />
				<path d="M7 6v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronFirstIcon.displayName = "TablerChevronFirstIcon";
}
