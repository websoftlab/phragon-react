import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageCirclePauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageCirclePauseIcon = React.forwardRef<SVGSVGElement, TablerMessageCirclePauseIconProps>(
	function TablerMessageCirclePauseIcon(props, ref) {
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
				<path d="M12.989 19.932a9.93 9.93 0 0 1 -5.289 -.932l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.131 1.818 3.056 4.37 2.692 6.824" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageCirclePauseIcon.displayName = "TablerMessageCirclePauseIcon";
}
