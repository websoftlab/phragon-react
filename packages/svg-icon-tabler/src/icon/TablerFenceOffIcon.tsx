import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFenceOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFenceOffIcon = React.forwardRef<SVGSVGElement, TablerFenceOffIconProps>(function TablerFenceOffIcon(
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
			<path d="M12 12h-8v4h12m4 0v-4h-4" />
			<path d="M6 16v4h4v-4" />
			<path d="M10 12v-2m0 -4l-2 -2m-2 2v6" />
			<path d="M14 16v4h4v-2" />
			<path d="M18 12v-6l-2 -2l-2 2v4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFenceOffIcon.displayName = "TablerFenceOffIcon";
}
