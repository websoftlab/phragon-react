import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAppleArcadeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAppleArcadeIcon = React.forwardRef<SVGSVGElement, TablerBrandAppleArcadeIconProps>(
	function TablerBrandAppleArcadeIcon(props, ref) {
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
				<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
				<path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
				<path d="M12 7l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAppleArcadeIcon.displayName = "TablerBrandAppleArcadeIcon";
}
