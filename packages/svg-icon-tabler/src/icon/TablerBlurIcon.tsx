import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBlurIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBlurIcon = React.forwardRef<SVGSVGElement, TablerBlurIconProps>(function TablerBlurIcon(props, ref) {
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
			<path d="M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035z" />
			<path d="M12 3v17" />
			<path d="M12 12h9" />
			<path d="M12 9h8" />
			<path d="M12 6h6" />
			<path d="M12 18h6" />
			<path d="M12 15h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBlurIcon.displayName = "TablerBlurIcon";
}
