import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSirenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSirenIcon = React.forwardRef<SVGSVGElement, TablerSirenIconProps>(function TablerSirenIcon(
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
			<path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" />
			<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z" />
			<path d="M21 12h1" />
			<path d="M18.5 4.5 18 5" />
			<path d="M2 12h1" />
			<path d="M12 2v1" />
			<path d="m4.929 4.929.707.707" />
			<path d="M12 12v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSirenIcon.displayName = "TablerSirenIcon";
}
