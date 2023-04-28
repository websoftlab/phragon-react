import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletOffIcon = React.forwardRef<SVGSVGElement, TablerDropletOffIconProps>(
	function TablerDropletOffIcon(props, ref) {
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
				<path d="M18.963 14.938a6.54 6.54 0 0 0 -.899 -4.06l-4.89 -7.26c-.42 -.626 -1.287 -.804 -1.936 -.398a1.376 1.376 0 0 0 -.41 .397l-1.282 1.9m-1.625 2.415l-1.986 2.946c-1.695 2.837 -1.035 6.44 1.567 8.545c2.602 2.105 6.395 2.105 8.996 0a6.83 6.83 0 0 0 1.376 -1.499" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletOffIcon.displayName = "TablerDropletOffIcon";
}
