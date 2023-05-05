import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowLeftIconProps>(
	function TablerArrowLeftIcon(props, ref) {
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
				<path d="M19 12 L5 12" />
				<path d="M12 19 L5 12 L12 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLeftIcon.displayName = "TablerArrowLeftIcon";
}
