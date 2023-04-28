import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleArrowLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleArrowLeftIcon = React.forwardRef<SVGSVGElement, TablerCircleArrowLeftIconProps>(
	function TablerCircleArrowLeftIcon(props, ref) {
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
				<path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
				<path d="M8 12l4 4" />
				<path d="M8 12h8" />
				<path d="M12 8l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleArrowLeftIcon.displayName = "TablerCircleArrowLeftIcon";
}
