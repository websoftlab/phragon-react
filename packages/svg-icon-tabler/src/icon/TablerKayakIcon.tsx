import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKayakIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKayakIcon = React.forwardRef<SVGSVGElement, TablerKayakIconProps>(function TablerKayakIcon(
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
			<path d="M6.414 6.414a2 2 0 0 0 0 -2.828l-1.414 -1.414l-2.828 2.828l1.414 1.414a2 2 0 0 0 2.828 0z" />
			<path d="M17.586 17.586a2 2 0 0 0 0 2.828l1.414 1.414l2.828 -2.828l-1.414 -1.414a2 2 0 0 0 -2.828 0z" />
			<path d="M6.5 6.5l11 11" />
			<path d="M22 2.5c-9.983 2.601 -17.627 7.952 -20 19.5c9.983 -2.601 17.627 -7.952 20 -19.5z" />
			<path d="M6.5 12.5l5 5" />
			<path d="M12.5 6.5l5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerKayakIcon.displayName = "TablerKayakIcon";
}
