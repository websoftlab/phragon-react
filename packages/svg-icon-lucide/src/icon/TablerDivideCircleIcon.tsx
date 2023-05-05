import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDivideCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDivideCircleIcon = React.forwardRef<SVGSVGElement, TablerDivideCircleIconProps>(
	function TablerDivideCircleIcon(props, ref) {
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
				<path d="M8 12 L16 12" />
				<path d="M12 16 L12 16" />
				<path d="M12 8 L12 8" />
				<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDivideCircleIcon.displayName = "TablerDivideCircleIcon";
}
