import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageCircleDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageCircleDownIcon = React.forwardRef<SVGSVGElement, TablerMessageCircleDownIconProps>(
	function TablerMessageCircleDownIcon(props, ref) {
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
				<path d="M12.006 19.98a9.869 9.869 0 0 1 -4.306 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.993 1.7 2.93 4.041 2.746 6.344" />
				<path d="M19 16v6" />
				<path d="M22 19l-3 3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageCircleDownIcon.displayName = "TablerMessageCircleDownIcon";
}
