import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGuitarPickFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGuitarPickFilledIcon = React.forwardRef<SVGSVGElement, TablerGuitarPickFilledIconProps>(
	function TablerGuitarPickFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M12 2c-1.613 0 -2.882 .104 -3.825 .323l-.23 .057c-3.019 .708 -4.945 2.503 -4.945 5.62c0 3.367 1.939 8.274 4.22 11.125c.32 .4 .664 .786 1.03 1.158l.367 .36a4.904 4.904 0 0 0 6.752 .011a15.04 15.04 0 0 0 1.41 -1.528c2.491 -3.113 4.221 -7.294 4.221 -11.126c0 -3.025 -1.813 -4.806 -4.71 -5.562l-.266 -.066c-.936 -.25 -2.281 -.372 -4.024 -.372z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGuitarPickFilledIcon.displayName = "TablerGuitarPickFilledIcon";
}
