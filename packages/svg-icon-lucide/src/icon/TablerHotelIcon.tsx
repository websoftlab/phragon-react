import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHotelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHotelIcon = React.forwardRef<SVGSVGElement, TablerHotelIconProps>(function TablerHotelIcon(
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
			<path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
			<path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
			<path d="M8 7h.01" />
			<path d="M16 7h.01" />
			<path d="M12 7h.01" />
			<path d="M12 11h.01" />
			<path d="M16 11h.01" />
			<path d="M8 11h.01" />
			<path d="M10 22v-6.5m4 0V22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHotelIcon.displayName = "TablerHotelIcon";
}
