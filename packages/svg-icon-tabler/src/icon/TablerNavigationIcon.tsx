import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNavigationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNavigationIcon = React.forwardRef<SVGSVGElement, TablerNavigationIconProps>(
	function TablerNavigationIcon(props, ref) {
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
				<path d="M12 18.5l7.265 2.463a.535 .535 0 0 0 .57 -.116a.548 .548 0 0 0 .134 -.572l-7.969 -17.275l-7.97 17.275a.547 .547 0 0 0 .135 .572a.535 .535 0 0 0 .57 .116l7.265 -2.463" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNavigationIcon.displayName = "TablerNavigationIcon";
}
