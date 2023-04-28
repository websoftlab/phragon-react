import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface Tabler360ViewIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const Tabler360ViewIcon = React.forwardRef<SVGSVGElement, Tabler360ViewIconProps>(function Tabler360ViewIcon(
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
			<path d="M14 6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
			<path d="M3 5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" />
			<path d="M17 7v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" />
			<path d="M3 16c0 1.657 4.03 3 9 3s9 -1.343 9 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	Tabler360ViewIcon.displayName = "Tabler360ViewIcon";
}
