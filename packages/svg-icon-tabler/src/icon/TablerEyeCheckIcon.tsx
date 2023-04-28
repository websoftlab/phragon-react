import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeCheckIcon = React.forwardRef<SVGSVGElement, TablerEyeCheckIconProps>(function TablerEyeCheckIcon(
	props,
	ref
) {
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
			<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M11.143 17.961c-3.221 -.295 -5.936 -2.281 -8.143 -5.961c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.222 .37 -.449 .722 -.68 1.057" />
			<path d="M15 19l2 2l4 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEyeCheckIcon.displayName = "TablerEyeCheckIcon";
}
