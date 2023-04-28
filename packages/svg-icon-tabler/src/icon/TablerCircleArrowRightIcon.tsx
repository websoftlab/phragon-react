import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleArrowRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleArrowRightIcon = React.forwardRef<SVGSVGElement, TablerCircleArrowRightIconProps>(
	function TablerCircleArrowRightIcon(props, ref) {
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
				<path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
				<path d="M16 12l-4 -4" />
				<path d="M16 12h-8" />
				<path d="M12 16l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleArrowRightIcon.displayName = "TablerCircleArrowRightIcon";
}
